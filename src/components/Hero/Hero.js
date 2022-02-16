import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I Am MohammadHossein<br />
          Welcome To My Personal Portfolio
        </SectionTitle>
        <SectionText>
           Here i try to guide you through my most important personal projects
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;