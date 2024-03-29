import { Typography } from '@mui/material';

import { PlantCardProps } from '@/components/PlantCard/PlantCardTypes';
import { StyledPlantCard, StyledImage } from '@/components/PlantCard/PlantCardStyled';

const PlantCard = ({ name, preview, linkToView, hasSmallSize = false }: PlantCardProps) => {
  return (
    <StyledPlantCard to={linkToView} $hasSmallSize={hasSmallSize}>
      <StyledImage
        duration={0}
        src={preview}
        showLoading={!hasSmallSize}
        $hasSmallSize={hasSmallSize}
      />
      <Typography sx={!hasSmallSize ? { fontWeight: 500 } : undefined}>{name}</Typography>
    </StyledPlantCard>
  );
};

export default PlantCard;
