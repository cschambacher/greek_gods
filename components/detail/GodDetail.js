import React, { Component } from "react";
import { Query } from "react-apollo";

import { withRouter } from "react-router-dom";
import NameDetail from "./NameDetail";
import Queries from "../../client/graphql/queries";

const { FETCH_GOD } = Queries;

const GodDetail = props => {
        return (           
            <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;
                    console.log(data.god);
                    return (
                        <div className="detail">
                            <NameDetail id={data.god.id} name={data.god.name} />
                        </div>
                    );
                }}
            </Query>
        );
    
}

export default withRouter(GodDetail);