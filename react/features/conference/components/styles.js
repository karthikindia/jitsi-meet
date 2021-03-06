import {
    BoxModel,
    ColorPalette,
    createStyleSheet,
    fixAndroidViewClipping
} from '../../base/styles';

/**
 * The styles of the feature conference.
 */
export default createStyleSheet({
    /**
     * {@code Conference} style.
     */
    conference: fixAndroidViewClipping({
        alignSelf: 'stretch',
        backgroundColor: ColorPalette.appBackground,
        flex: 1
    }),

    displayNameBackdrop: {
        alignSelf: 'center',
        backgroundColor: 'rgba(28, 32, 37, 0.6)',
        borderRadius: 4,
        margin: 16,
        paddingHorizontal: 16,
        paddingVertical: 4
    },

    displayNameText: {
        color: ColorPalette.white,
        fontSize: 14
    },

    /**
     * The style of the {@link View} which expands over the whole
     * {@link Conference} area and splits it between the {@link Filmstrip} and
     * the {@link Toolbox}.
     */
    toolboxAndFilmstripContainer: {
        bottom: BoxModel.margin,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        left: 0,
        position: 'absolute',
        right: 0,

        // Both on Android and iOS there is the status bar which may be visible.
        // On iPhone X there is the notch. In the two cases BoxModel.margin is
        // not enough.
        top: BoxModel.margin * 3
    }
});
