import { ItemColumns } from '../ManifestConstants';
import { MockDataSet, MockEntityRecord } from '../__mocks__/mock-datasets';
import { getChartDataFromDataset } from '../components/DatasetMapping';

describe('DatasetMapping', () => {
    beforeEach(() => jest.clearAllMocks());

    it('returns correct props when custom color is false', () => {
        const items = [
            new MockEntityRecord('1', {
                [ItemColumns.Key]: 'item1',
                [ItemColumns.Legend]: 'Item 1',
                [ItemColumns.Size]: 30,
                [ItemColumns.Color]: 'blue',
            }),
            new MockEntityRecord('1', {
                [ItemColumns.Key]: 'item1',
                [ItemColumns.Legend]: 'Item 1',
                [ItemColumns.Size]: 20,
                [ItemColumns.Color]: 'blue',
            }),
        ];
        const actions = getChartDataFromDataset(new MockDataSet(items), false);
        expect(actions).toMatchSnapshot();
    });

    it('returns correct props when custom color is true ', () => {
        const items = [
            new MockEntityRecord('1', {
                [ItemColumns.Key]: 'item1',
                [ItemColumns.Legend]: 'Item 1',
                [ItemColumns.Size]: 30,
                [ItemColumns.Color]: 'blue',
            }),
            new MockEntityRecord('1', {
                [ItemColumns.Key]: 'item1',
                [ItemColumns.Legend]: 'Item 1',
                [ItemColumns.Size]: 20,
                [ItemColumns.Color]: 'blue',
            }),
        ];
        const actions = getChartDataFromDataset(new MockDataSet(items), true);
        expect(actions).toMatchSnapshot();
    });
});
