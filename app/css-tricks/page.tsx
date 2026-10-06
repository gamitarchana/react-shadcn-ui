import { Button } from "@/components/ui/button"

import { Heading } from "@/components/ui/heading"

export default function Csspage() {
  return (
    <div className="w-full min-h-svh p-6">
        <div className="w-full">
            <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl font-heading">Css Tricks</h1>
            <div className="py-8"> 
                <div className="py-4"> 
                  <div className="scene1">
                    <div className="panel"></div>
                  </div>
                  <div className="scene">
                    <div className="panel panel--translate-neg-z">translateZ(-200px)</div>
                  </div>

                  <div className="scene">
                    <div className="panel panel--translate-pos-z">translateZ(200px)</div>
                  </div>

                  <div className="scene">
                    <div className="panel panel--rotate-x">rotateX(45deg)</div>
                  </div>

                  <div className="scene">
                    <div className="panel panel--rotate-y">rotateY(45deg)</div>
                  </div>

                  <div className="scene">
                    <div className="panel panel--rotate-z">rotateZ(45deg)</div>
                  </div>
                </div>
                <div className="scene2 scene--card">
                  <div className="card">
                    <div className="card__face card__face--front">front</div>
                    <div className="card__face card__face--back">back</div>
                  </div>
                </div>
                <p>Click card to flip.</p>
              </div>
              <div className="scene3">
  <div className="cube">
    <div className="cube__face cube__face--front">front</div>
    <div className="cube__face cube__face--back">back</div>
    <div className="cube__face cube__face--right">right</div>
    <div className="cube__face cube__face--left">left</div>
    <div className="cube__face cube__face--top">top</div>
    <div className="cube__face cube__face--bottom">bottom</div>
  </div>
</div>
{/*<p className="radio-group">
  <label>
    <input type="radio" name="rotate-cube-side" value="front" /> front
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="right" /> right
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="back" /> back
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="left" /> left
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="top" /> top
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
  </label>
  </p>*/}

        </div>
    </div>
  )
}
