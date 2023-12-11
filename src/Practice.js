import React from "react";
import styled from "styled-components";

const dummysite=()=>{

    const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:wght@300&display=swap');
    font-family: 'Poppins';
    padding:15px;
    font-size:24px;
    color:blue;
    background-color:green;
    border:none
    `
    const MainBody = styled.div`
        border:1px solid green;
        width:70%;
        height:400px;
        font-weight:32px;
        margin:auto;
    `
    const Wrapper = styled.div`
    button{
        color:red;
    }

    p{
        color:green;
        span{
            color:pink;
        }
    }
    .dumy{
        color:yellow;
        &:hover{
            color:green;
        }
    }

    `

    return(
        <>
        <h2>Hello world</h2>
        <MainBody>
        ok
        </MainBody>
        <MainBody>
        ok
        </MainBody>
        <button>
            Hello
        </button>
        <Button>
            New Button
        </Button>
        <Wrapper>
            <p>Okokokoko <span>New Boyyy</span>  </p>
            <button>haha</button>
            <div className="dumy">
new
            </div>
        </Wrapper>
        </>
    )
}

export default dummysite;