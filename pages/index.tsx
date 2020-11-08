import React from 'react';
import styled from 'styled-components';
import Flex from '../components/Flex';
import Text from '../components/Typography';
import Filters from '../components/common/filters';
import Detail from '../components/common/detail';
import Spinner from './../components/Spinner';
import axios from 'axios';

const DetailStyled = styled.div`
  @media (max-width: 699px) {
    width: 100%;
    margin: 8px 0px;
    > div {
      padding: 0px;
      > div > div {
        margin: 8px 0px 0px 0px;
      }
    }
  }
  width: calc(100% - 200px);
  > div > div:nth-child(4n) {
    margin: 0px 0px 5px 0px;
  }
`;

const PageStyled = styled.div`
  @media (max-width: 699px) {
    > div {
      flex-direction: column;
    }
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1440px;
  }
`;
export default function Home() {
  const [detail, setDetail] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedDetail, setSelectedDetail] = React.useState({
    year: '',
    isSuccessfulLaunch: false,
    isSuccessfulLanding: false,
  });

  const searchDetail = async (launchSuccess, landSuccess, year) => {
    setIsLoading(true);
    try {
      const { data } = await axios({
        url: `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${
          launchSuccess ? launchSuccess : ''
        }&land_success=${landSuccess ? landSuccess : ''}&launch_year=${year}`,
        method: 'get',
      });
      setDetail(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    searchDetail(
      selectedDetail.isSuccessfulLaunch,
      selectedDetail.isSuccessfulLanding,
      selectedDetail.year
    );
  }, [selectedDetail]);
  return (
    <PageStyled>
      <Text
        fontSize="h4"
        fontWeight="bold"
        padding="22px"
        stringColor="#191919"
      >
        SpaceEx Lauch Program
      </Text>
      <Flex padding="9px" alignItem="flex-start">
        <Filters
          selected={(year, isSuccessfulLaunch, isSuccessfulLanding) => {
            setSelectedDetail({
              year,
              isSuccessfulLaunch,
              isSuccessfulLanding,
            });
          }}
        />
        {!isLoading ? (
          <DetailStyled>
            <Flex alignItem="stretch" padding="0px 0px 0px 8px" flexWrap="wrap">
              {detail ? (
                <>
                  {detail.map((item) => {
                    return <Detail detail={item} />;
                  })}
                </>
              ) : null}
            </Flex>
          </DetailStyled>
        ) : (
          <Flex justifyContent="center" padding="42px 0px 0px 0px" width="80%">
            <Spinner type="primary" />
          </Flex>
        )}
      </Flex>
    </PageStyled>
  );
}
