
module ArticleStore {
    import core = Core;
    var eventAggregator = core.EventAggregator.getInstance();

    var filter = {
        isOpen: false,
        criteria: []
    }

    eventAggregator.subscribe('article.filter.open', open);
    eventAggregator.subscribe('article.filter.close', close);
    eventAggregator.subscribe('article.filter.addCriteria', addCriteria);

    function open() {
        filter.isOpen = true;
        eventAggregator.publish('category.filter.change.isOpen');
    }

    function close() {
        filter.isOpen = false;
        eventAggregator.publish('category.filter.change.isOpen');
    }

    function addCriteria(criteria) {
      filter.criteria.push(criteria);
      eventAggregator.publish('category.filter.change.criteria');
    }

    export function isOpen() {
        return filter.isOpen;
    }

    export function criteria() {
        return criteria.slice();
    }
}
