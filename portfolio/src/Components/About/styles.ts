import styled from 'styled-components'
import { colors } from '../../styles'

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const TextInfo = styled.div`
  width: 100%;

  p {
    margin-top: 32px;
    letter-spacing: 2px;
    line-height: 32px;
    text-align: justify;
    text-shadow: 0px 5px 12px ${colors.darkBlue};
  }
`

export const Picture = styled.div`
  opacity: 1;
  animation: fadeIn 2s ease-in normal;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  img {
    object-fit: cover;
    width: 320px;
    height: 320px;
    border-radius: 50%;
  }
`
