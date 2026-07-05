CREATE OR REPLACE PROCEDURE TransferFunds
(
    p_fromAccount IN NUMBER,
    p_toAccount   IN NUMBER,
    p_amount      IN NUMBER
)
IS

    v_balance NUMBER;

BEGIN

    -- Get source account balance
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    -- Check sufficient balance
    IF v_balance >= p_amount THEN

        -- Deduct amount from source account
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        -- Add amount to destination account
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Fund Transfer Successful.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');

    END IF;

EXCEPTION

    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Account does not exist.');

    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);

END;
/