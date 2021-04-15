import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import "./shop.styles.scss";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CcollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapShot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CcollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatch)(ShopPage);
