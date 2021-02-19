
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
height:80px;
background:transparent;
color:white;
`
export const NavLink = styled(Link)`
padding-left:5px;
padding-right:5px;
color:#fff;
font-size:2rem;
text-decoration:none;
cursor:pointer;

@media screen and (max-width:400px){
  position:absolute;
  top:10px;
  left:25px;
}
`

export const NavIcon = styled.div`
display:block;

position:absolute;
top:10px;
right:0;
cursor:pointer;
color:#fff;

p{
  font-weight:bold;
  transform:translate(-200%,100%);
}
`

export const Bars = styled(FaPizzaSlice)`

font-size:2rem;
transform:translate(-50%,-15%);
`