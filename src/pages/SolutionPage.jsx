function SolutionPage() {
  return (
    <div>
      <h2>Поверни картку порівняй відповідь</h2>

      <div className="tasksWrapper">
        <div className="cardTask">
          <div className="taskFront">
            Дублювання картки <br />
            в Slice
            <br /> "Repeat Card"
          </div>
          <div className="taskBack">
            <div>
              repeatItem: (state, action) =&gt; &#123;
              <br />
              const<span className="accent"> payloadItem</span> =
              state.paymentsList
              <span className="accent">.find</span>(<br />
              (item) =&gt; item.id === action.payload
              <br />
              ); state.payments<span className="accent">List.push</span>(&#123;
              <br />
              ...payloadItem,
              <br />
              <span className="accent"> id: new Date().getTime(),</span>
              <br />
              &#125;);
              <br />
              &#125;,
              <br />
            </div>
          </div>
        </div>
        <div className="cardTask">
          <div className="taskFront">
            Формула: <br /> нижня частина сторінки
            <br /> ( для infinity scroll)
          </div>
          <div className="taskBack">
            <div>
              e.target.documentElement.
              <span className="accent">scrollHeight</span>-
              <br />
              (e.target.documentElement.
              <span className="accent">scrollTop</span> +
              <br />
              window.<span className="accent">innerHeight</span>)
              <br /> x - (xt + xb);
            </div>
          </div>
        </div>
        <div className="cardTask">
          <div className="taskFront">
            Відобразити кількість сторінок <br />
            <br /> ( для пагінаціі)
          </div>
          <div className="taskBack">
            <div>
              &#123;<span className="accent">Array.from</span>(&#123;{" "}
              <span className="accent">length: </span>
              totalPageNumber&#125;)<span className="accent">.map</span>((_,
              index) =&gt; (<br />
              &lt;button"
              <br />
              key=&#123;index&#125;
              <br />
              onClick=&#123;() =&gt;{" "}
              <span className="accent">changeNumberPage</span>(index + 1)&#125;
              <br />
              className=&#123;
              <br />
              <span className="accent"> currentPageNumber === </span>index + 1 ?
              "activePgBtn" : "pgBtn"
              <br />
              &#125; &gt; <br />
              <span className="accent"> &#123;index + 1&#125;</span>
              <br />
              &lt;/button&gt; ))&#125;
            </div>
          </div>
        </div>
        <div className="cardTask">
          <div className="taskFront">
            Умови коли кнопки <br />
            переключення сторінок НЕактивні <br />
            <br /> ( для пагінаціі)
          </div>
          <div className="taskBack">
            <div>
              <p>
                Попередня:
                <br />
                disabled=&#123;currentPageNumber
                <span className="accent"> === 1</span>&#125;
              </p>
              <p>
                Остання:
                <br />
                disabled=&#123;currentPageNumber
                <span className="accent"> === totalPageNumber</span>&#125;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionPage;
