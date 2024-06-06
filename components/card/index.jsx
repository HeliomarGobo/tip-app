import { LayoutCenter } from "../container"
import { Subtitle, Value } from "../text"
import { CardContainer } from "./styles"


export const Card = ({ title, subtitle }) => {
    return (
        <CardContainer>
            <LayoutCenter>
            <Value value={title} size="medium" />
            <Subtitle text={subtitle} variant="light" />
            </LayoutCenter>
        </CardContainer>
    )
}