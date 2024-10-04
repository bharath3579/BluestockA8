const bubbleTextPlugin = {
    id: 'bubbleTextPlugin',
    afterDatasetsDraw(chart, args, options) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((element, index) => {
          const data = dataset.data[index];
          const fontSize = element.options.radius * 0.3;
          ctx.font = `${fontSize}px Arial`;
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(data.text, element.x, element.y);
        });
      });
    },
  };
  
  export default bubbleTextPlugin;
  