import styled from "styled-components"
import COLORS from "../constants/colors"


function Login() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <form>
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button>Entrar</button>
            </form>
            <p>Primeira vez? Cadastre-se!</p>
        </Container>
        
    )
}

export default Login


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${COLORS.primary};


    h1 {
        font-size: 32px;
        font-family: 'Saira Stencil One';
        color: #FFFFFF;

        margin-bottom: 30px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 10px;

        width: 90vw;
    }

    input {
        padding: 15px;

        border-radius: 5px;
        border: none;
        outline: none;

        font-size: 20px;
        color: #000000;
        
    }

    button {
        background-color: ${COLORS.secondary};
        color: #FFFFFF;

        border-radius: 5px;
        border: none;
        
        width: 100%;
        padding: 15px;

        font-size: 20px;
        font-weight: 700;
    }

    p {
        margin-top: 30px;

        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
    }
`