import MyContent from "./MyContent/MyContent.jsx";
import Store from "./Store/Store.jsx";

export default function Content({ activeSection, assets, ownedAssets, addOwnedAsset, isLoading }) {
  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return ;
      case "courses":
        return <MyContent ownedAssets={ownedAssets} />;
      case "resources":
        return ;
      case "store":
        return <Store assets={assets} addOwnedAsset={addOwnedAsset} isLoading={isLoading} />;
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
