import styled from 'styled-components'

import color from '../../Config/Color'

export const HamburgerDiv = styled.div`
    display: block;
    position: relative;
    top: 3vh;
    right: 5vw;
    z-index: 1;
    padding-top:18px;
    padding-left:15px;
    background-color:${color.Wood2};
    background-size:cover;
    border-radius:30px;
    width: 60px;
    height: 60px;
    user-select: none;
    & a
    {
      text-decoration: none;
      color: #232323;
    
      transition: color 0.3s ease;
    }

    & a:hover
    {
      color: tomato;
    }

    & input
    {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;
      cursor: pointer;
      opacity: 0;
      z-index: 2; 
    }

   
    & span
    {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: ${color.font2};
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }


    & span:first-child
    {
      transform-origin: 0% 0%;
    }

    & span:nth-last-child(2)
    {
        transform-origin: 0% 100%;
    }

    & input:checked ~ span
    {
        opacity: 1;
        transform: rotate(45deg) translate(5px, -1px);
        background: ${color.font2};
    }

    & input:checked ~ span:nth-last-child(3)
    {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    & input:checked ~ span:nth-last-child(2)
    {
        transform: rotate(-45deg) translate(0px, 6px);
    }

    & ul
    {
      position: absolute;
      margin: 50px 0 -70vw -70vw;
      width: 300px;
      height:auto;
      box-shadow: 0px 0px 10px #000000;
      border-radius: 30px;
      background: ${color.Wood4};
      list-style-type: none;
    
      transform-origin: 100% 0%;
      transform: translate(150%, 0%);
    
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    & ul li
    {
      padding: 10px 0;
      font-size: 22px;
    }

    & input:checked ~ ul
    {
      transform: none;
    }
`