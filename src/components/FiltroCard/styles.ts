import styled from 'styled-components'
import { Props } from '.'

type PropsAtivo = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsAtivo>`
  padding: 8px;
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`

export const Label = styled.label`
  font-size: 14px;
`
