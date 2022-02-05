import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

const ContentBase = styled.div`
  width: 600px;
  height: 300px;
  background-color: #FFFFFF;
`;

const Header = styled.div`
  display: flex;
`;

const AccountName = styled.div`
  background-color: #C4C4C4;
  width: 340px;
  height: 35px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const AccountId = styled.div`
  background-color: #C4C4C4;
  width: 180px;
  height: 35px;
  margin-left: 20px;
`;

const Body = styled.div`
  background-color: #C4C4C4;
  width: 550px;
  height: 100px;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const Footer = styled.div`
  background-color: #C4C4C4;
  width: 550px;
  height: 35px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const Post = () => {
  return (
    <ContentBase>
      <Header>
        <Avatar sx={{ width: 88, height: 88, marginTop: 3, marginLeft: 3 }} />
        <div>
          <AccountName />
          <AccountId />
        </div>
      </Header>
      <Body />
      <Footer />
    </ContentBase>
  );
};
