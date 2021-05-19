// @see https://github.com/exah/promise-anime
const $nodes = document.querySelectorAll('.js-animate')

const animations = Array.from($nodes).reduce(
  (promise, $el) => promise.then(() =>
    promiseAnime({
      targets: $el,
      opacity: [0, 1],
      translateY: [50, 0],
      func: function() {
        return this.targets;
      }
    })
  ),
  Promise.resolve()
)

animations.then(() => console.log('complete'))

// @exah/promise-anime module content:
const isFn = el => typeof el === 'function'

function promiseAnime (options, handleInstance) {
  return new (resolve => {
    const { complete } = options

    const animeInstance  = anime({
      ...options,
      complete (animation) {
        if (isFn(complete)) complete(animation)
        resolve(animation)
      }
    })

    if (isFn(handleInstance)) handleInsstance(animeInstance)
  })
}