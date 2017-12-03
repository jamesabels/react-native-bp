import { NavigationActions } from "react-navigation";

export default Navigation = {
  reset: function (index, screen) {
    return NavigationActions.reset({
      index,
      actions: [
        NavigationActions.navigate({ routeName: screen})
      ]
    })
  }
}