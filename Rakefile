require 'fileutils'

namespace :assets do
  task :precompile do
    sh 'bundle exec middleman build'
  end
end

task :schema do
  FileUtils::Verbose.rm_rf(["schema/controller.json",
                            "schema/controller.md"])

  system(%Q(prmd combine -m "schema/meta.json" "schema/schemata/controller" > "schema/controller.json"))
  system(%Q(prmd verify "schema/controller.json"))
  system(%Q(prmd doc "schema/controller.json" > "schema/controller.md"))

  File.open("source/docs/controller.html.md", "w") do |f|
    f.puts("---\n"+
           "title: Docs - Flynn\n"+
           "layout: docs\n"+
           "---\n")

    File.open("schema/controller.md", "r") do |fmd|
      fmd.each_line do |line|
        f.write(line)
      end
    end
  end
end
