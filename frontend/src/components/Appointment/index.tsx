import React from 'react';
import { FiClock } from 'react-icons/fi';
import imageUser from '../../assets/user.svg';

import { Container } from './styles';

interface AppointmentProps {
  name: string;
  hors: string;
  image: string;
}

const Appointment: React.FC<AppointmentProps> = ({ name, hors, image }) => {
  return (
    <Container>
      <span>
        <FiClock />
        {hors}
      </span>

      <div>
        <img src={image || imageUser} alt={name} />
        <strong>{name}</strong>
      </div>
    </Container>
  );
};

export default Appointment;
