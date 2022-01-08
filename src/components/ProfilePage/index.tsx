import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
            <Avatar />
          </Banner>

          <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>kmartins</h1>
            <h2>@kmartins_f0</h2>
            
            <p>
                Student at UFPB
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Paraíba, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido em 26 de junho de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>70</strong>
                </span>
                <span>
                    <strong>7 </strong> seguidores
                </span>
            </Followage>
            </ProfileData>

        <Feed />
      </Container>
  )
}

export default ProfilePage;