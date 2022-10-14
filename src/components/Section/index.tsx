import React from "react";
import { StyledSection, StyledSectionContainer } from "./styles";

interface ISection {
  children?: React.ReactNode;
  /**
   * section id
   * */
  sid: string;
  /**
   * section style cold be:
   * - full (100vh, 100vw)
   * - normal (size auto)
   * - viewh (section height = 100vh)
   * - vieww (section width = 100vw)
   */
  sstyle: string;
}

export function Section({ children, sid, sstyle = "normal" }: ISection) {
  return (
    <StyledSection className={sstyle} id={sid}>
      {sstyle === "full" ? (
        <>{children}</>
      ) : (
        <StyledSectionContainer>{children}</StyledSectionContainer>
      )}
    </StyledSection>
  );
}
