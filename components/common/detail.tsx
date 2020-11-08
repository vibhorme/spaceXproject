import React from 'react';
import styled from 'styled-components';
import Flex from './../Flex';
import Card from './../Card';
import Text from './../Typography';

export interface DetailProps {
  detail: any;
}

const DetailStyled = styled.div`
  @media (max-width: 699px) {
    width: 100%;
  }
  @media (min-width: 700px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;
const MissionIdList = styled.li`
  ::marker {
    color: #4f5191; /* Change the color */
  }
`;
const Detail: React.FC<DetailProps> = ({ detail }: DetailProps) => {
  return (
    <DetailStyled>
      <Card margin="0px 10px 5px 0px">
        <Flex justifyContent="center">
          <img
            src={detail.links.mission_patch}
            width="149"
            alt="mission"
            height="200"
          />
        </Flex>
        <Text
          fontSize="h5"
          fontWeight="bold"
          margin="5px 0px 0px 0px"
          stringColor="#4F5191"
        >
          {detail.mission_name} #{detail.flight_number}
        </Text>
        <Text
          fontSize="h5"
          fontWeight="bold"
          margin="5px 0px 0px 0px"
          stringColor="#0C0C0C"
        >
          Mission Ids
        </Text>
        {detail.mission_id.length ? (
          <ul style={{ margin: '0px' }}>
            {detail.mission_id.map(({ item }: any) => {
              return <MissionIdList> {item} </MissionIdList>;
            })}
          </ul>
        ) : (
          <Text
            fontSize="h5"
            textAlign="center"
            fontWeight="regular"
            stringColor="#0C0C0C"
          >
            Data not available
          </Text>
        )}
        <Flex alignItem="baseline">
          <Text
            fontSize="h5"
            fontWeight="bold"
            margin="5px 0px 0px 0px"
            stringColor="#0C0C0C"
          >
            Launch Year:
          </Text>
          <Text fontSize="h5" fontWeight="regular" stringColor="#4F5191">
            &nbsp;{detail.launch_year}
          </Text>
        </Flex>
        <Flex alignItem="baseline">
          <Text
            fontSize="h5"
            fontWeight="bold"
            margin="5px 0px 0px 0px"
            stringColor="#0C0C0C"
          >
            Successful Launch:
          </Text>
          <Text fontSize="h5" fontWeight="regular" stringColor="#4F5191">
            &nbsp;{detail.launch_success ? 'true' : 'false'}
          </Text>
        </Flex>
        <Flex alignItem="baseline">
          <Text
            fontSize="h5"
            fontWeight="bold"
            margin="5px 0px 0px 0px"
            stringColor="#0C0C0C"
          >
            Successful Landing:
          </Text>
          <Text fontSize="h5" fontWeight="regular" stringColor="#4F5191">
            &nbsp;{detail.launch_landing ? 'true' : 'false'}
          </Text>
        </Flex>
      </Card>
    </DetailStyled>
  );
};

export default Detail;
