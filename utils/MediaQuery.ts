import { useMediaQuery } from "native-base";

import { View, Text } from "react-native";

export default function MediaQuery() {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 350,
  });

  return { isSmallScreen };
}
// const isDeviceWidth375_811 = useMediaQuery({
//     query: "(min-device-width:375) and (max-device-height:811)",
// });
// const isDeviceWidth360_374 = useMediaQuery({
//     query: "(min-device-width:360) and (max-device-width:374)",
// });
