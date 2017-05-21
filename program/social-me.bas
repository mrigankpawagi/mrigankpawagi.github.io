start:
screen 12
CLS
ON ERROR GOTO errhandle
COLOR 15
PRINT "Welcome to SocialME"
INPUT "Login(L) or Signup(S)"; ls$
SELECT CASE LCASE$(ls$)
    CASE "l"
        GOTO login
    CASE "s"
        GOTO signup
    CASE ELSE
        GOTO start
END SELECT

END


cont:
CLS
COLOR 15
PRINT "Welcome "; user$
PRINT
INPUT "Select Action: Send Message(S) or View Messages(V)"; sv$
SELECT CASE LCASE$(sv$)
    CASE "s"
        INPUT "To whom do you want to send a message to (1 person at a time) "; rec$

        PRINT "Type the Message you want to send."
        PRINT "*if the user you are sending the message to, is not a member of SocialME, the message would not be recieved."
        INPUT message$

        OPEN rec$ + "-messages.txt" FOR OUTPUT AS #4
        PRINT #4, user$
        PRINT #4, message$
        CLOSE #4
        PRINT
        COLOR 2: PRINT "MESSAGE SUCCESSFULL SENT.": COLOR 15
        PRINT "Redirecting to home page.....": SLEEP 3: GOTO cont


    CASE "v"
        PRINT "LOADING MESSAGES...": SLEEP 3
        PRINT
        OPEN user$ + "-messages.txt" FOR INPUT AS #5
        INPUT #5, send$
        PRINT "From. "; send$

        INPUT #5, message$
        PRINT "MESSAGE:"
        PRINT message$
        CLOSE #5
        PRINT
        PRINT "Redirecting to home page.....": SLEEP 3: GOTO cont


END SELECT
END

login:
INPUT "Username: "; user$
PRINT "Password: ";
COLOR 0
INPUT pass$
COLOR 15
OPEN user$ + ".txt" FOR INPUT AS #3
FOR x = 1 TO 2: INPUT #3, pass.check$: NEXT x
IF pass.check$ = pass$ THEN
    COLOR 2
    PRINT "LOGGED IN"
    GOTO cont
    COLOR 15
ELSE
    COLOR 4
    PRINT "Password and Username do not match."
    COLOR 15
    INPUT "Do you want to Try Again(T) or Exit(E) "; te$
    SELECT CASE LCASE$(te$)
        CASE "t"
            GOTO login
        CASE "e"
            END
    END SELECT

END IF

END



signup:
INPUT "Username: "; user$
PRINT "Password: ";
COLOR 0
INPUT pass$
COLOR 15
OPEN user$ + ".txt" FOR OUTPUT AS #1
PRINT #1, user$
PRINT #1, pass$
CLOSE #1
OPEN user$ + "-messages.txt" FOR OUTPUT AS #2
CLOSE #2
COLOR 2: PRINT "Successfully Signed Up."
COLOR 15
INPUT "Goto main page(g) or Exit(e) "; ge$
SELECT CASE LCASE$(ge$)
    CASE "g"
        GOTO start
    CASE "e"
        END
END SELECT

errhandle:
IF ERR = 53 THEN
    PRINT
    COLOR 4
    PRINT "NO SUCH USER"
    COLOR 15
    INPUT "Do you want to Try Again(T) or Exit(E) "; te$
    SELECT CASE UCASE$(te$)
        CASE "t"
            GOTO login
        CASE "e"
            END
    END SELECT

END IF

RESUME NEXT
