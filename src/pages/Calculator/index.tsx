import React from "react";
import { Form } from "../../components/Form";
import { Response } from "../../components/Response";
import { StyledCalculator } from "./style";

export const CalculatorPage = () => {
    return (
        <StyledCalculator>
            <Form />
            <Response />
        </StyledCalculator>
    );
};