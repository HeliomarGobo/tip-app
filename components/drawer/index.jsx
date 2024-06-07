import { AnimatePresence, MotiView } from "moti";
import { MotiPressable } from "moti/interactions";

import { Dimensions } from "react-native";

export const Drawer = ({
  offsetY = 200,
  children,
  visible,
  onBackdropPress,
}) => {
  const { width, height } = Dimensions.get("screen");
  return (
    <AnimatePresence>
      {visible && (
        <>
          <MotiView
            key="drawer-backdrop"
            from={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.7,
            }}
            exit={{
              opacity: 0,
            }}
            style={{
              position: "absolute",
              width,
              height,
              backgroundColor: "000000",
              opacity: 0.7,
            }}
          >
            <MotiPressable
              onPress={onBackdropPress}
              style={{ position: "absolute", width, height }}
            />
          </MotiView>

          <MotiView
            key="drawer-content"
            from={{
              translateY: height,
            }}
            animate={{
              translateY: offsetY,
            }}
            exit={{
              translateY: height,
            }}
            transition={{
              type: "timing",
            }}
            style={{
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              height: height,
              width: width,
              position: "absolute",
            }}
          >
            {children}
          </MotiView>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
