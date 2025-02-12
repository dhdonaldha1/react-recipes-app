import React, { Component } from 'react';
import Recipe from "./Recipe";

export default class RecipeList extends Component
{
    render() {
        return (
            <h4>RecipeList page
                <Recipe></Recipe>
            </h4>
        )
    }
}