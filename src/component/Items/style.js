import styled from 'styled-components'

export const Tr=styled.tr``
export const TdSearch=styled.td`
padding-top:15px;
text-align:${(props)=>(props.alignCenter ? "center":"start")};
width:${(props)=>(props.width ? props.width +"%" : "auto")};
word-break:break-all;
padding-bottom:35px;
`
export const Td=styled.td`
padding-top:15px;
text-align:${(props)=>(props.alignCenter ? "center":"start")};
width:${(props)=>(props.width ? props.width +"%" : "auto")};
word-break:break-all;
svg{
    width:18px;
    height:18px;  
}
@media(max-width:750px){
    width:30%;
}

`