  /**
    @class
    <p>The QueryFacet facet allows you to specify any valid <code>Query</code> and
    have the number of matching hits returned as the value.</p>

    <p>Facets are similar to SQL <code>GROUP BY</code> statements but perform much
       better. You can also construct several <em>"groups"</em> at once by simply
       specifying multiple facets.</p>

    <div class="alert-message block-message info">
        <p>
            <strong>Tip: </strong>
            For more information on faceted navigation, see
            <a href="http://en.wikipedia.org/wiki/Faceted_classification">this</a>
            Wikipedia article on Faceted Classification.
        </p>
    </div>

    @name ejs.QueryFacet

    @desc
    <p>A facet that return a count of the hits matching the given query.</p>

    @param {String} name The name which be used to refer to this facet. For instance,
        the facet itself might utilize a field named <code>doc_authors</code>. Setting
        <code>name</code> to <code>Authors</code> would allow you to refer to the
        facet by that name, possibly simplifying some of the display logic.

    */
  ejs.QueryFacet = function (name) {

    /**
        The internal facet object.
        @member ejs.QueryFacet
        @property {Object} facet
        */
    var facet = {};
    facet[name] = {};

    return {

      /**
            <p>Sets the query to be used for this facet.</p>

            @member ejs.QueryFacet
            @param {Object} oQuery A valid <code>Query</code> object.
            @returns {Object} returns <code>this</code> so that calls can be chained.
            */
      query: function (oQuery) {
        if (oQuery == null) {
          return facet[name].query;
        }
      
        facet[name].query = oQuery.get();
        return this;
      },

      /**
            <p>Allows you to reduce the documents used for computing facet results.</p>

            @member ejs.QueryFacet
            @param {Object} oFilter A valid <code>Filter</code> object.
            @returns {Object} returns <code>this</code> so that calls can be chained.
            */
      filter: function (oFilter) {
        if (oFilter == null) {
          return facet[name].facet_filter;
        }
      
        facet[name].facet_filter = oFilter.get();
        return this;
      },

      /**
            <p>Allows you to serialize this object into a JSON encoded string.</p>

            @member ejs.QueryFacet
            @returns {String} returns this object as a serialized JSON string.
            */
      toString: function () {
        return JSON.stringify(facet);
      },

      /**
            <p>Retrieves the internal <code>facet</code> object. This is typically used by
               internal API functions so use with caution.</p>

            @member ejs.QueryFacet
            @returns {String} returns this object's internal <code>facet</code> property.
            */
      get: function () {
        return facet;
      }
    };
  };