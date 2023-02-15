import styled from 'styled-components'
export const Container=styled.div`
background-color:#fff;
box-shadow:0px 0px 5px #ccc;
border-radius: 5px;
padding:20px;
background-color:#fff;
width: 95%;
margin:20px auto;
max-width:1120px;
@media (max-width: 750px){
    width: auto;
}
`
export const ContainerTable=styled.div`
max-height: 210px;
    overflow: scroll;
`
export const filterContainer=styled.div`
margin-bottom:35px;
padding-bottom:20px;
border-bottom:1px solid #ccb7b7;
display:flex;
justify-content:space-between;
align-items:center;
gap:30px;
@media (max-width: 750px){
    display: grid;
    width:100%;
    justify-content: space-around;
}
`
export const Search=styled.div`
display:flex;
gap:30px;
@media (max-width: 750px){
    display: grid;
    width:100%;
}
`
export const Table=styled.table`
width: 100%;
@media (max-width:750px){
    display:grid;
}
`
export const Thead=styled.thead`
`
export const Tbody=styled.tbody``
export const Tr=styled.tr``
export const Th=styled.th`
text-align:start;
padding-bottom:5px;
text-align:${(props)=>(props.alignCenter ? "center":"start")};
width:${(props)=>(props.width ? props.width +"%" : "auto")}

`