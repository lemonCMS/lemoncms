if (__DEV__) {
  if (typeof window !== "undefined") {
    const global = window;
    const key = "__react_morty_build__";
    const buildNames = { cjs: "CommonJS", esm: "ES modules", umd: "UMD" };

    if (global[key] && global[key] !== process.env.BUILD_FORMAT) {
      const initialBuildName = buildNames[global[key]];
      const secondaryBuildName = buildNames[process.env.BUILD_FORMAT];

      // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.
      throw new Error(
        `You are loading the ${secondaryBuildName} build of Miniverse ` +
        `on a page that is already running the ${initialBuildName} ` +
        `build, so things won't work right.`
      );
    }

    global[key] = process.env.BUILD_FORMAT;
  }
}

export { default as createWatchers } from "./createWatchers";
export { unsubscribeWatchers as unsubscribeWatchers } from "./createWatchers";
export { default as propName } from "./propName";
export { default as propNameAuth } from "./propNameAuth";
export { default as runHooks } from "./runHooks";
export { default as MiniverseContext } from "./MiniverseContext";
export { default as Miniverse } from "./Miniverse";
export { default as Store } from "./Store";
export { default as provideHooks } from "./provideHooks";
export { default as withMiniverse } from "./withMiniverse";
export { ApiService as ApiService } from "./ApiService";

