import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Segment, Grid, Loader } from 'semantic-ui-react';


class SearchResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedGitRepository: props.selectedGitRepository };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ selectedGitRepository: nextProps.selectedGitRepository });
  }
  
  render() {
    const { search, error, loading } = this.props.data;
    const { selectedGitRepository } = this.state;
    
    if (error && error.message)
      return (
        <Grid.Row centered columns={1}>
          <Grid.Column>
            <Segment inverted color='red' tertiary>
              {error.message}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      );
    
    if (loading && this.props.inputHasCharacterTyped)
      return (
        <Grid.Row centered columns={1}>
          <Grid.Column>
            <Loader active />
          </Grid.Column>
        </Grid.Row>
      );
    
    if (search && search.edges && this.props.inputHasCharacterTyped)
      return (
        <Grid.Row stretched columns={2}>
          {/*language=CSS*/}
          <style jsx global>
            {`
                .on-hover {
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                }

                .on-hover:hover {
                    transform: scale(1.05);
                }
            `}
          </style>
          {
            Object.keys(search.edges).map(index => (
              <Grid.Column key={index} style={{ paddingBottom: '2vw' }}>
                {
                  selectedGitRepository.node && selectedGitRepository.node.id === search.edges[index].node.id ?
                    <Segment disabled>
                      {search.edges[index].node.name}
                    </Segment>
                    :
                    <Segment
                      onClick={this.props.openModal.bind(this, search.edges[index])}
                      className='on-hover'
                    >
                      {search.edges[index].node.name}
                    </Segment>
                }
              </Grid.Column>
            ))
          }
        </Grid.Row>
      );
    return <div style={{ width: '100%', textAlign: 'center' }}>Please Type A Repository Name</div>;
    
  }
}

export const search = gql`
query search($searchTerm: String!) {
  search(query: $searchTerm, type: REPOSITORY, first: 30) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          id
          name
          owner {
            id
            login
            avatarUrl(size:150)
            resourcePath
          }
					forkCount
          watchers{
            totalCount
          }
          stargazers{
            totalCount
          }
        }
      }
    }
  }
}
`;

export default graphql(search, {
  options(ownProps) {
    return { variables: { searchTerm: ownProps.searchTerm } };
  }
})(SearchResultsList);
