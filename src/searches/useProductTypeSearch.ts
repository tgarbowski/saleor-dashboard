import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import { taxTypeFragment } from "@saleor/fragments/taxes";
import makeTopLevelSearch from "@saleor/hooks/makeTopLevelSearch";
import gql from "graphql-tag";

import {
  SearchProductTypes,
  SearchProductTypesVariables
} from "./types/SearchProductTypes";

export const searchProductTypes = gql`
  ${pageInfoFragment}
  ${taxTypeFragment}
  query SearchProductTypes($after: String, $first: Int!, $query: String!) {
    search: productTypes(
      after: $after
      first: $first
      filter: { search: $query }
    ) {
      edges {
        node {
          id
          name
          hasVariants
          slug
          productAttributes {
            id
            inputType
            slug
            name
            valueRequired
            values {
              id
              name
              slug
            }
          }
          taxType {
            ...TaxTypeFragment
          }
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;

export default makeTopLevelSearch<
  SearchProductTypes,
  SearchProductTypesVariables
>(searchProductTypes);
