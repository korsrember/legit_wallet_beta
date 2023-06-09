/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe("Assets in workers", function() {
  beforeEach(function() {
    this.ifr = document.createElement("iframe");
    document.body.append(this.ifr);
  });

  afterEach(function() {
    this.ifr.remove();
  });

  it("can be fetched", function(done) {
    window.addEventListener("message", function l(ev) {
      if (ev.data === "assetcontent") {
        window.removeEventListener("message", l);
        done();
      }
    });
    this.ifr.src = "/base/tests/fixtures/assets-in-worker/build/runner.html";
  });
});
