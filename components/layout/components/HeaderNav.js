import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <HeaderNavWrapper>
      <Link href={"/"}><HeaderNavLinks active={Router.pathname =="/" ? true : false}>
        Home
      </HeaderNavLinks></Link>
      <Link href={"/createCampaign"}><HeaderNavLinks active={Router.pathname =="/createCampaign" ? true : false}>
        Add Record
      </HeaderNavLinks></Link>
      <Link href={"/medicine"}><HeaderNavLinks active={Router.pathname =="/medicine" ? true : false}>
        Medicine
      </HeaderNavLinks></Link>
      <Link href={"/hospital"}><HeaderNavLinks active={Router.pathname =="/hospital" ? true : false}>
        Hospitals
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
  `

const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv };
  height: 100%;
  font-family: 'Roboto';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`

export default HeaderNav