import React from 'react'

const MediaSection = () => {
  return (
    <section className="section-media">
        <div className="container">
          <div className="flex jc-sb section-media__heading">
            <div>
              <select name="paramaters" id="db-parms" className="query-parms">
                <option value="1" className="query-parms__item">Trending</option>
                <option value="2" className="query-parms__item">Popular</option>
              </select>
            </div>
            <div className="toggle-buttons">
              <input
                type="radio"
                id="movies"
                name="toggle"
                value="1"
                className="toggle-buttons__input"
                checked
              />
              <label className="toggle-buttons__movies" htmlFor="movies">Movies</label>

              <input
                type="radio"
                id="shows"
                name="toggle"
                value="2"
                className="toggle-buttons__input"
              />
              <label className="toggle-buttons__shows" htmlFor="shows">TV Shows </label>
            </div>
          </div>
          <div className="grid grid-3-cols display"></div>
        </div>
      </section>
  )
}

export default MediaSection