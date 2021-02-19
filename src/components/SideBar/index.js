import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={toggle}/>
        </Icon>
        <SidebarMenu>
          <SidebarLink to='/'>Pizzas</SidebarLink>
          <SidebarLink to='/'>Desserts</SidebarLink>
          <SidebarLink to='/'>Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" >Order Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar
