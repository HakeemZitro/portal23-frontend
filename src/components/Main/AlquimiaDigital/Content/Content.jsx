import MyContent from "./MyContent/MyContent.jsx";
import Store from "./Store/Store.jsx";
import UploadAsset from "./UploadAsset/UploadAsset.jsx";
import AssetsList from "./AssetsList/AssetsList.jsx";
import UsersList from "./UsersList/UsersList.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

export default function Content({ activeSection, assets, ownedAssets, addOwnedAsset, isLoading }) {
  const renderSection = () => {
    switch (activeSection) {
      // ── Secciones accesibles para todos los usuarios ──
      case "dashboard":
        return ;
      case "courses":
        return <MyContent ownedAssets={ownedAssets} />;
      case "resources":
        return ;
      case "store":
        return <Store assets={assets} addOwnedAsset={addOwnedAsset} isLoading={isLoading} />;

      // ── Secciones protegidas solo para admin ──
      case "uploadAsset":
        return (
          <ProtectedRoute>
            <UploadAsset />
          </ProtectedRoute>
        );
      case "assetsList":
        return (
          <ProtectedRoute>
            <AssetsList assets={assets} addOwnedAsset={addOwnedAsset} isLoading={isLoading} />
          </ProtectedRoute>
        );
      case "usersList":
        return (
          <ProtectedRoute>
            <UsersList assets={assets} addOwnedAsset={addOwnedAsset} isLoading={isLoading} />
          </ProtectedRoute>
        );

      default:
        return <MyContent ownedAssets={ownedAssets} />;
    }
  };

  return (
    <div className="app-content">
      {renderSection()}
    </div>
  );
}
