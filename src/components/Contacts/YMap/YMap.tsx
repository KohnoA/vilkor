import { YMaps, Map, Placemark, ZoomControl, TypeSelector } from '@pbe/react-yandex-maps';
import styles from './YMap.module.scss';
import { IconColor, MAP_COORDINATES } from '@/constants';
import { memo, useMemo } from 'react';

function YMap() {
  const mapState = useMemo(() => {
    return {
      center: MAP_COORDINATES,
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
    };
  }, []);

  const placemarkProps = useMemo(() => {
    return {
      iconCaption: 'VILKOR',
    };
  }, []);

  const placeMarkOpt = useMemo(() => {
    return {
      iconColor: IconColor.GREEN,
    };
  }, []);

  return (
    <YMaps
      query={{
        apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY,
      }}
    >
      <Map className={styles.map} defaultState={mapState}>
        <Placemark
          geometry={MAP_COORDINATES}
          defaultProperties={placemarkProps}
          options={placeMarkOpt}
        />

        <ZoomControl />
        <TypeSelector />
      </Map>
    </YMaps>
  );
}

export default memo(YMap);
