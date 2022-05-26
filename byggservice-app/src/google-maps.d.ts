import '@types/googlemaps';
import {} from 'google.maps';

declare global {
  interface Window {
    google: typeof google;
  }
}