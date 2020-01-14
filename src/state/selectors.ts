export const armiesSelector = ({ armies }) => armies;
export const armiesCounterSelector = ({ armies }) => ({
  armiesCount: armies.length,
});
