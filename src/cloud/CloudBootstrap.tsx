import { type ReactNode, useEffect, useState } from "react";
import { listMapsFromCloud } from "./mapCloudStore";
import { loadMap, saveMap } from "../store/mapStore";

interface CloudBootstrapProps {
  children: ReactNode;
}

function getUpdatedAt(doc: any): number {
  return typeof doc?.meta?.updatedAt === "number"
    ? doc.meta.updatedAt
    : 0;
}

export function CloudBootstrap({ children }: CloudBootstrapProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    async function syncCloudToLocal() {
      try {
        const cloudMaps = await listMapsFromCloud();

        for (const cloudMap of cloudMaps) {
          const localMap = await loadMap(cloudMap.id);

          if (!localMap) {
            await saveMap(cloudMap);
            continue;
          }

          const cloudUpdatedAt = getUpdatedAt(cloudMap);
          const localUpdatedAt = getUpdatedAt(localMap);

          if (cloudUpdatedAt > localUpdatedAt) {
            await saveMap(cloudMap);
          }
        }
      } catch (error) {
        console.warn(
          "Não foi possível sincronizar os mapas da nuvem. Usando armazenamento local.",
          error,
        );
      } finally {
        if (active) setReady(true);
      }
    }

    void syncCloudToLocal();

    return () => {
      active = false;
    };
  }, []);

  if (!ready) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        Sincronizando seus mapas...
      </div>
    );
  }

  return <>{children}</>;
}
