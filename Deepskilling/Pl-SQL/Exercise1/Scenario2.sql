SET SERVEROUTPUT ON;

DECLARE

    CURSOR c_customer IS
        SELECT CustomerID,
               Name,
               Balance
        FROM Customers;

BEGIN

    FOR rec IN c_customer LOOP

        IF rec.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                rec.Name || ' promoted to VIP.'
            );

        ELSE

            UPDATE Customers
            SET IsVIP = 'N'
            WHERE CustomerID = rec.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/