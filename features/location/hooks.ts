import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setLocation } from './stores';

export const useGeolocation = () => {
  const dispatch = useAppDispatch();
  const { latitude, longitude } = useAppSelector((state) => state.location);

  useEffect(() => {
    if (latitude === null || longitude === null) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            dispatch(
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              })
            );
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      }
    }
  }, [latitude, longitude, dispatch]);

  return { latitude, longitude };
};