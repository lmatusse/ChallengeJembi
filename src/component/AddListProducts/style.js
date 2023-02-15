import styled from 'styled-components'

export const Container=styled.div`
max-width: 1120px;
width: 95%;
margin: 0 auto;
display: flex;
gap:20px;
margin-top:-50px;
border-radius: 5px;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;
justify-content:space-between;
align-items:center;
padding:20px;
background-color:#fff;
box-shadow:0px 0px 5px #ccc;
@media (max-width:750px){
    display:grid;
}
`
export const ContainerListEmpty=styled.div`
max-width: 1120px;
width: 95%;
margin: 0 auto;
border-top-right-radius: 0;
border-top-left-radius: 0;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
padding: 20px;
color: #ff5722;
font-size: 22px;
background-color:#fff;
text-align:center;
@media (max-width:750px){
    display:grid;
}
`
export const HeaderList = styled.header`
color: #000;
font-size: 16px;
margin-bottom:8px;
`
export const InputContent=styled.div`
width:20%;
@media screen and (max-width: 992px){
    width:100%;
}
`
export const Input= styled.input`
padding:8px 12px;
border-radius:5px;
font-size:15px;
border:1px solid #ccc;
outline:none;
width:100%
@media (max-width: 750px){
    width:auto;
}
`
export const SelectContent=styled.div`
width:20%;
`
export const SelectContentPrior=styled.div`
width:20%;
`
export const Select=styled.select`
padding:5px 10px;
border-radius:5px;
font-size:15px;
border:1px solid #ccc;
outline:none;
width:100%;
background-color: #fff;
`
export const SelectPriority=styled.select`
padding:8px 12px;
border-radius:5px;
font-size:15px;
border:1px solid #ccc;
outline:none;
background-color: #fff;
max-width: 60%;
width:${(props)=>(props.width ? props.width +"%" : "auto")};
@media (max-width: 750px){
    max-width:100%;
    width:100%;
}
`