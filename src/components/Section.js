import React from 'react';
import styled from 'styled-components'


export default function Section(){
	return(
		<Wrapper>
      <LeftSection>
          <img src="assets/images/login-logo.svg" width="135"></img>
          <h1>Welcome to your professional community</h1>
          <button><img src="assets/images/google.svg"></img> Sign in with Google</button>
      </LeftSection>
      <RightSection>
        
        <ButtonGroup>
					<a href="">Join Now</a>
					<a href="" className='btn-border'>Sign In</a>					
				</ButtonGroup>
        <img src="assets/images/login-hero-new.svg" width="700"></img>
      </RightSection>
    </Wrapper>
	)
}


const Wrapper = styled.section` 
  max-width:1128px;
  margin:65px auto;
  display:flex;
  display:-webkit-flex;
  padding:0 15px;
  flex-wrap:wrap;

`

const LeftSection = styled.div` 
  width: 55%;
  @media all and (max-width: 992px){
    width: 100%;
  }
  h1{
    color: #8f5849;
    font-size: 56px;
    font-weight: 400;
    margin:45px 0 15px;
  }
  button{
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
    width: 100%;
    border: 1px solid rgba(0,0,0,0.6);
    border-radius: 28px;
    background-color: transparent;
    padding: 15px;
    outline: none; 
    max-width:450px;
  }
  img{
    vertical-align:middle;
    padding-right:20px;
  }
`

const RightSection = styled.div` 
  width: 45%;
  @media all and (max-width: 992px){
    width: 100%;
    margin-top:40px;
  }
  img{
    @media all and (max-width: 1600px){
      max-width:100%;
    }
  }
`

const ButtonGroup = styled.div` 
text-align:right;
margin-bottom:30px;
@media all and (max-width: 992px){
  text-align:center;
}
a{
  background-color: rgba(0,0,0,0);
  border:2px solid #fff;
  color: rgba(0,0,0,0.6);
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 20px;
  padding: 8px 20px 10px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-radius: 25px;
  color: rgba(0,0,0,0.6);
  margin-right: 12px;
}
.btn-border{
  color: #0073b1;
  border:2px solid #0073b1;
  margin-right:0px;
}
`