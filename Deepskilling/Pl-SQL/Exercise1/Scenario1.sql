SET SERVEROUTPUT ON;

DECLARE

    CURSOR c_customer IS
        SELECT c.CustomerID,
               c.Name,
               c.DOB,
               l.LoanID,
               l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID;

    v_age NUMBER;

BEGIN

    FOR rec IN c_customer LOOP

        -- Calculate age
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, rec.DOB)/12);

        IF v_age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied to '
                || rec.Name
                || '. New Interest Rate Updated.'
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/